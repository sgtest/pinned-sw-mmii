package cl.qande.mmii.app.models.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class ReporteMaestrosResponseOk extends ApiResponse {

    @JsonProperty("maestro-movimientos")
    private List<MaestroMovimientosApiDto> maestroMovimientos;
    @JsonProperty("maestro-saldos")
    private List<MaestroSaldosApiDto> maestroSaldos;

    public ReporteMaestrosResponseOk(List<MaestroMovimientosApiDto> maestroMovimientos, List<MaestroSaldosApiDto> maestroSaldos) {
        this.maestroMovimientos = maestroMovimientos;
        this.maestroSaldos = maestroSaldos;
        this.setCode(0);
        this.setMessage("Mensaje recibido correctamente");
    }

    public ReporteMaestrosResponseOk() {
        this.maestroMovimientos = new ArrayList<>();
        this.maestroSaldos = new ArrayList<>();
        this.setCode(0);
        this.setMessage("Mensaje recibido correctamente");
    }

    public List<MaestroMovimientosApiDto> getMaestroMovimientos() {
        return maestroMovimientos;
    }

    public void setMaestroMovimientos(List<MaestroMovimientosApiDto> maestroMovimientos) {
        this.maestroMovimientos = maestroMovimientos;
    }

    public List<MaestroSaldosApiDto> getMaestroSaldos() {
        return maestroSaldos;
    }

    public void setMaestroSaldos(List<MaestroSaldosApiDto> maestroSaldos) {
        this.maestroSaldos = maestroSaldos;
    }
}
