/*
2024-08-15
Actual: 8.2.0-COL
Last:   8.1.2-COL
*/

--========================================================================
--========================================================================
--========================================================================
--Creción de usuarios admin y app
/*
CREATE USER mmii_admindb CREATEDB CREATEROLE PASSWORD 'b55tO<RB4aza';
GRANT azure_pg_admin TO mmii_admindb;
--create database qande_mmii with owner mmii_admindb;
create database qande_mmii;
CREATE USER mmii_appuserdb PASSWORD 'H;859md+5GAf';
GRANT CONNECT ON DATABASE qande_mmii TO mmii_appuserdb;
--ALTER DEFAULT PRIVILEGES FOR ROLE mmii_appuserdb GRANT SELECT, INSERT, DELETE ON TABLES TO mmii_appuserdb;
--ALTER DEFAULT PRIVILEGES FOR ROLE mmii_appuserdb GRANT EXECUTE ON FUNCTIONS TO mmii_appuserdb;
*/

--========================================================================
--========================================================================
--========================================================================
-- Vista Clientes Maestro

CREATE VIEW clientes.vw_maestro_clientes AS
    SELECT
        cte.id,
        cte.identificador,
        cte.nombre,
        cte.id_tipo_identificador,
        tid.tipo_identificador, tid.glosa_identificador, tid.habilitado,
        CAST((SELECT string_agg(cta.id_cuenta_custodio, ',') FROM clientes.cuenta cta WHERE cta.id_cliente=cte.id) as VARCHAR(100) ) as lista_cuentas
    FROM clientes.cliente cte
    LEFT JOIN clientes.tipo_identificador tid
        ON cte.id_tipo_identificador=tid.id
;


--========================================================================
--========================================================================
--========================================================================
--



--========================================================================
--========================================================================
--========================================================================
--




--========================================================================
--========================================================================
--========================================================================
--





--========================================================================
--========================================================================
--========================================================================
--




--========================================================================
--========================================================================
--========================================================================
--


--========================================================================
--========================================================================
--========================================================================
--


--========================================================================
--========================================================================
--========================================================================
--



--========================================================================
--========================================================================
--========================================================================
--


--========================================================================
--========================================================================
--========================================================================
--




--========================================================================
--========================================================================
--========================================================================
--


--========================================================================
--========================================================================
--========================================================================
--



--========================================================================
--========================================================================
--========================================================================
--



