package cl.qande.mmii.app.models.service;

import cl.qande.mmii.app.config.properties.AppNotificacionMailProperties;
import cl.qande.mmii.app.models.db.core.entity.ControlDiario;
import cl.qande.mmii.app.models.db.core.entity.ControlDiarioReporte;
import cl.qande.mmii.app.models.exception.QandeMmiiException;
import cl.qande.mmii.app.models.mail.EmailDetails;
import cl.qande.mmii.app.util.helper.mapper.EntityToHtml;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificacionEmail {

    private static final String SUBJECT_OK = " - OK ";
    private static final String SUBJECT_ERROR = " - ERROR ";
    @Autowired
    private IEmailService emailService;
    @Autowired
    private AppNotificacionMailProperties appNotificacionMailProperties;

    private String generaDetalle(String detalle) {
        return detalle.isEmpty() ? "" : " Detalle: ["+detalle+"]";
    }
    private String generaTituloHtml(String titulo) {
        return "<h1>"+titulo+"</h1></br></br>";
    }

    public void notificarErrorReportesMaestros(String processDate, String detalle) throws QandeMmiiException {
        var mensaje = "Error al generar reportes maestros para fecha proceso ["+processDate+"]." + this.generaDetalle(detalle);
        var asunto  = appNotificacionMailProperties.getReportesMaestros().getDefaultSubject()+SUBJECT_ERROR+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getReportesMaestros().getRecipientErrorTo(),
                appNotificacionMailProperties.getReportesMaestros().getRecipientErrorCc(),
                appNotificacionMailProperties.getReportesMaestros().getRecipientErrorBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getReportesMaestros(), recipients);
    }
    public void notificarOkReportesMaestros(String processDate) throws QandeMmiiException {
        var mensaje = "Reportes maestros para fecha proceso ["+processDate+"] generados correctamente.";
        var asunto  = appNotificacionMailProperties.getReportesMaestros().getDefaultSubject()+SUBJECT_OK+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getReportesMaestros().getRecipientTo(),
                appNotificacionMailProperties.getReportesMaestros().getRecipientCc(),
                appNotificacionMailProperties.getReportesMaestros().getRecipientBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getReportesMaestros(), recipients);
    }

    public void notificarErrorControlDiario(String processDate, String detalle) throws QandeMmiiException {
        var mensaje = "Error al realizar control diario para fecha proceso ["+processDate+"]." + this.generaDetalle(detalle);
        var asunto  = appNotificacionMailProperties.getControlDiario().getDefaultSubject()+SUBJECT_ERROR+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getControlDiario().getRecipientErrorTo(),
                appNotificacionMailProperties.getControlDiario().getRecipientErrorCc(),
                appNotificacionMailProperties.getControlDiario().getRecipientErrorBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getControlDiario(), recipients);
    }

    public void notificarOkControlDiario(String processDate, List<ControlDiario> resultado) throws QandeMmiiException {
        var mensaje = this.generaTituloHtml("Resultado del control diario para fecha proceso ["+processDate+"]");
        mensaje     = mensaje+ EntityToHtml.resultadoControlDiarioToHtml(resultado);
        var asunto  = appNotificacionMailProperties.getControlDiario().getDefaultSubject()+SUBJECT_OK+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getControlDiario().getRecipientTo(),
                appNotificacionMailProperties.getControlDiario().getRecipientCc(),
                appNotificacionMailProperties.getControlDiario().getRecipientBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getControlDiario(), recipients);
    }

    public void notificarErrorControlDiarioSegmentado(String processDate, String detalle) throws QandeMmiiException {
        var mensaje = "Error al realizar control diario segmentado para fecha proceso ["+processDate+"]." + this.generaDetalle(detalle);
        var asunto  = appNotificacionMailProperties.getControlDiario().getDefaultSubject()+SUBJECT_ERROR+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getControlDiario().getRecipientErrorTo(),
                appNotificacionMailProperties.getControlDiario().getRecipientErrorCc(),
                appNotificacionMailProperties.getControlDiario().getRecipientErrorBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getControlDiario(), recipients);
    }

    public void notificarOkControlDiarioSegmentado(String processDate, List<ControlDiarioReporte> resultado) throws QandeMmiiException {
        var mensaje = this.generaTituloHtml("Resultado del control diario segmentado para fecha proceso ["+processDate+"]");
        mensaje     = mensaje+ EntityToHtml.resultadoControlDiarioSegmentadoToHtml(resultado);
        var asunto  = appNotificacionMailProperties.getControlDiario().getDefaultSubject()+SUBJECT_OK+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getControlDiario().getRecipientTo(),
                appNotificacionMailProperties.getControlDiario().getRecipientCc(),
                appNotificacionMailProperties.getControlDiario().getRecipientBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getControlDiario(), recipients);
    }
    public void notificarErrorProcesoSflFtpPershing(String processDate, String detalle) throws QandeMmiiException {
        var mensaje = "Error al procesar SFL Pershing para fecha proceso ["+processDate+"]." + this.generaDetalle(detalle);
        var asunto  = appNotificacionMailProperties.getSflPershing().getDefaultSubject()+SUBJECT_ERROR+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getSflPershing().getRecipientErrorTo(),
                appNotificacionMailProperties.getSflPershing().getRecipientErrorCc(),
                appNotificacionMailProperties.getSflPershing().getRecipientErrorBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getSflPershing(), recipients);
    }
    public void notificarOkProcesoSflFtpPershing(String processDate) throws QandeMmiiException {
        var mensaje = "SFL Pershing para fecha proceso ["+processDate+"] procesados correctamente.";
        var asunto  = appNotificacionMailProperties.getSflPershing().getDefaultSubject()+SUBJECT_OK+processDate;
        var recipients  = new String[]{appNotificacionMailProperties.getSflPershing().getRecipientTo(),
                appNotificacionMailProperties.getSflPershing().getRecipientCc(),
                appNotificacionMailProperties.getSflPershing().getRecipientBcc()};
        this.enviaMail(mensaje, asunto, appNotificacionMailProperties.getSflPershing(), recipients);
    }

    private void enviaMail(String mensaje, String asunto, AppNotificacionMailProperties.NotificacionMailConfiguration mailConfiguration, String[] recipients) throws QandeMmiiException {
        var mailDetail = new EmailDetails();
        mailDetail.setSenderName(mailConfiguration.getSenderName());
        mailDetail.setRecipientsTo(recipients[0]);
        mailDetail.setRecipientsCc(recipients[1]);
        mailDetail.setRecipientsBcc(recipients[2]);

        mailDetail.setMsgBody(mensaje);
        mailDetail.setSubject(asunto.isEmpty() ? mailConfiguration.getDefaultSubject() : asunto);

        try {
            emailService.sendHtmlMail(mailDetail);
        } catch (QandeMmiiException e) {
            throw new QandeMmiiException(e, "Error al enviar mail : ["+e.getMessage()+"]");
        }
    }
}