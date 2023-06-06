import { TratarErrorService } from './../services/tratar-error.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private tratarErrorService: TratarErrorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const skip = req.headers.get('skip-error');

    if (skip === null || skip === 'false') {
      return next.handle(req).pipe(
        catchError((erro) => {
          setTimeout(() => {
            if (!navigator.onLine) {
              this.tratarErrorService.avisoMensagemError('Sem conexão com a internet.');
            } else if (typeof erro === 'string') {
              this.tratarErrorService.avisoMensagemError(erro);
            } else if (erro.status === 422) {

              if (erro.error != null && erro.error instanceof Array) {
                let mensagem = '';

                for (const e of erro.error) {
                  mensagem += e + '\n';
                }

                this.tratarErrorService.avisoMensagemError(mensagem);
              } else {
                this.tratarErrorService.avisoMensagemError(erro.error.message);
              }
            } else if (erro.status >= 500) {
              this.tratarErrorService.avisoMensagemError('Ocorreu um erro no servidor.');
            } else if (erro.status === 403 || erro.status === 401) {
              this.tratarErrorService.avisoMensagemError('Você não tem permissões para acessar este serviço.', 'Acesso Negado!');
            } else {
              this.tratarErrorService.avisoMensagemError();
            }
          }, 200);
          return throwError(erro);
        })
      )
    } else {
      return next.handle(req).pipe();
    }
  }
}