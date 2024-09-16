package cl.qande.mmii.app.job;

import cl.qande.mmii.app.config.AppConfig;
import cl.qande.mmii.app.models.api_clients.mmii_suracorp.ParSourceCode;
import cl.qande.mmii.app.models.exception.MailException;
import cl.qande.mmii.app.models.exception.QandeMmiiException;
import cl.qande.mmii.app.models.service.NotificacionEmail;
import cl.qande.mmii.app.models.service.ParametrosFromMmiiSuraCorp;
import cl.qande.mmii.app.util.helper.CalendarioHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JobParametrosFromSuracorp implements Runnable {


    private static final int DESFASE_DIAS = -1;
    private static final String USUARIO_JOB = "jobAppUser";
    public static final String JOB_NAME = "Tarea Parámetros From SuraCorp";
    private final AppConfig appConfig;
    private final CalendarioHelper calendarioHelper;
    private final NotificacionEmail notificacionEmail;
    private final ParametrosFromMmiiSuraCorp mainService;

    @Autowired
    public JobParametrosFromSuracorp(AppConfig appConfig, CalendarioHelper calendarioHelper, NotificacionEmail notificacionEmail, ParametrosFromMmiiSuraCorp mainService) {
        this.appConfig = appConfig;
        this.calendarioHelper = calendarioHelper;
        this.notificacionEmail = notificacionEmail;
        this.mainService = mainService;
    }

    public boolean ejecutaJob(String usuario, boolean flagSendMail) throws QandeMmiiException {
        var processDate	= calendarioHelper.convierteDateToString(calendarioHelper.hoyConDesfaseDias(DESFASE_DIAS)).replace("-","");
        var resultado   = false;
        var msg         = "";
        ParSourceCode[][] resultadoCarga    = null;

        try {
            resultadoCarga = mainService.actualizaParametrosFromMmiiSuraCorp();
            resultado    = (resultadoCarga.length==2 && resultadoCarga[1].length==0);
        } catch (QandeMmiiException e) {
            this.logError(" Obtener valores desde API REST Parámetros por "+usuario, e.getMessage());
            msg = e.getMessage();
        } catch (Exception e) {
            this.logError(" Ejecución por "+usuario, e.getMessage());
            msg = e.getMessage();
        }

        try {
            if(flagSendMail) {
                notificacionEmail.notificarJobParametrosFromSuracorp(resultado, processDate, processDate, JOB_NAME, resultadoCarga, msg);
                return resultado;
            } else {
                this.logMessage(" Enviar mail por "+usuario+" desactivado");
                return resultado;
            }
        } catch (MailException e) {
            this.logError(" Enviar mail por "+usuario, e.getMessage());
            return false;
        }

    }


    public boolean ejecutaJob() {
        try {
            appConfig.customLog.info("Iniciando Job "+JOB_NAME+": "+this.getClass().getName()+" - "+Thread.currentThread().getName()+" - "+Thread.currentThread().getContextClassLoader().getName());
            return this.ejecutaJob(USUARIO_JOB, false);
        } catch (Exception e) {
            appConfig.customLog.error("Error al realizar tarea "+JOB_NAME+": "+this.getClass().getName()+" - "+Thread.currentThread().getName()+" - "+Thread.currentThread().getContextClassLoader().getName()+". Error ["+e.getMessage()+"]");
            return false;
        }
    }

    @Override
    public void run() {
        this.ejecutaJob();
    }


    private void logMessage(String message) {
        appConfig.customLog.info(JOB_NAME+message+": "+this.getClass().getName()+" - "+Thread.currentThread().getName()+" - "+Thread.currentThread().getContextClassLoader().getName());
    }
    private void logError(String message, String errorDescr) {
        appConfig.customLog.info("Error "+JOB_NAME+message+": "+this.getClass().getName()+" - "+Thread.currentThread().getName()+" - "+Thread.currentThread().getContextClassLoader().getName()+". Error ["+errorDescr+"]");
    }
}