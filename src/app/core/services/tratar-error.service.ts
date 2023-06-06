import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

enum TipoMensagem {
  ERRO = 'error',
  SUCESSO = 'success',
  ALERTA = 'warning',
  INFO = 'info'
}

interface IMensagem {
  titulo: string;
  mensagem: string;
  tipo?: TipoMensagem;
}

@Injectable({
  providedIn: 'root'
})
export class TratarErrorService {

  constructor() { }

  avisoMensagem(alerta: IMensagem) {
    setTimeout(() => Swal.fire(alerta.titulo, alerta.mensagem, alerta.tipo,), 100);
  }

  avisoToast(alerta: IMensagem) {
    setTimeout(() => Swal.fire({
      title: alerta.titulo,
      text: alerta.mensagem,
      icon: alerta.tipo,
      toast: true,
      timer: 5000,
      timerProgressBar: true,
      position: 'top-right',
      showConfirmButton: false
    }), 100);
  }

  avisoMensagemSucesso(mensagem: string = 'Operação realizada com sucesso', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Sucesso!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.SUCESSO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.SUCESSO });
  }

  avisoMensagemError(mensagem: string = 'Ocorreu um erro na operação', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Erro!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.ERRO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.ERRO });
  }

  avisoMensagemAlerta(mensagem: string = 'Não foi possivel realizar operação', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Alerta!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.ALERTA })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.ALERTA });
  }

  avisoMensagemInfo(mensagem: string = 'Operação com detalhe importante', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Fique atento!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.INFO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.INFO });
  }

  avisoMensagemSalvo(mensagem: string = 'Registro adicionado com sucesso', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Sucesso!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.SUCESSO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.SUCESSO });
  }

  avisoMensagemAtualizado(mensagem: string = 'Registro alterado com sucesso', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Sucesso!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.SUCESSO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.SUCESSO });
  }

  avisoMensagemApagado(mensagem: string = 'Registro excluído com sucesso', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Sucesso!';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.SUCESSO })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.SUCESSO });
  }

  avisoMensagemCPFInválido(mensagem: string = '', titulo?: string, popup?: boolean) {
    if (!titulo) titulo = 'Este CPF é inválido';
    if (!mensagem) mensagem = 'Verifique se digitou corretamente';

    if (popup) this.avisoToast({ titulo, mensagem, tipo: TipoMensagem.ALERTA })
    else this.avisoMensagem({ titulo, mensagem, tipo: TipoMensagem.ALERTA });
  }

  avisoFormularioInvalido(popup?: boolean) {
    if (popup) this.avisoToast({ titulo: 'Preencha os campos obrigatórios', mensagem: '', tipo: TipoMensagem.ALERTA })
    else this.avisoMensagem({ titulo: 'Preencha os campos obrigatórios', mensagem: 'E verifique se não digitou valores inválidos', tipo: TipoMensagem.ALERTA });
  }

  avisoImpressao() {
    Swal.fire({
      icon: 'info',
      title: 'Baixando o arquivo...',
      text: 'Irá abrir em nova guia',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Fechar'
    });
  }
}
