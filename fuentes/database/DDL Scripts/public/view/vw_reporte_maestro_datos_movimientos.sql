create or replace view public.vw_reporte_maestro_datos_movimientos
            (row_id, src_vw, id_reg, tipo_reg, custodian, client_id, account_no, name, process_date, trade_date,
             settlement_date, activity, buy_sell, quantity, price, comission, fees, net_amount, usde_net_amount,
             principal, cusip, symbol, isin, currency, fx_rate, interest, currency_base, cash_margin_account,
             product_type, security_description, activity_description, activity_code, source_code, description1,
             description2, description3, ticker, id_sub_sub_tipo_activo, id_sub_tipo_activo, id_tipo_activo,
             nombre_sub_sub_tipo_activo, aplica_flujo_neto, office_id, id_cuenta_custodio, ingreso_egreso, retiro,
             recaudo)
as
SELECT rank() OVER (ORDER BY row_id, src_vw) AS row_id,
       src_vw,
       id_reg,
       tipo_reg,
       custodian,
       client_id,
       account_no,
       name,
       process_date,
       trade_date,
       settlement_date,
       activity,
       buy_sell,
       quantity,
       price,
       comission,
       fees,
       net_amount,
       usde_net_amount,
       principal,
       cusip,
       symbol,
       isin,
       currency,
       fx_rate,
       interest,
       currency_base,
       cash_margin_account,
       product_type,
       security_description,
       activity_description,
       activity_code,
       source_code,
       description1,
       description2,
       description3,
       ticker,
       id_sub_sub_tipo_activo,
       id_sub_tipo_activo,
       id_tipo_activo,
       nombre_sub_sub_tipo_activo,
       aplica_flujo_neto,
       office_id,
       id_cuenta_custodio,
       ingreso_egreso,
       retiro,
       recaudo
FROM (SELECT 'B'::text                                                                                                                                                                                                                                                                                                                                                                                  AS src_vw,
             rank()
             OVER (ORDER BY vw_mov.tipo_reg, vw_mov.process_date, vw_mov.custodian, vw_mov.account_no, vw_mov.id_cuenta_custodio, vw_mov.cash_margin, vw_mov.cusip, vw_mov.symbol, vw_mov.isin, vw_mov.source_code, vw_mov.buy_sell_code, vw_mov.description_1, vw_mov.description_2, vw_mov.description_3, vw_mov.quantity, vw_mov.net_amount, vw_mov.principal, vw_mov.price, vw_mov.usde_net_amount) AS row_id,
             rank()
             OVER (ORDER BY vw_mov.tipo_reg, vw_mov.process_date, vw_mov.custodian, vw_mov.account_no, vw_mov.id_cuenta_custodio, vw_mov.cash_margin, vw_mov.cusip, vw_mov.symbol, vw_mov.isin, vw_mov.source_code, vw_mov.buy_sell_code, vw_mov.description_1, vw_mov.description_2, vw_mov.description_3, vw_mov.quantity, vw_mov.net_amount, vw_mov.principal, vw_mov.price, vw_mov.usde_net_amount) AS id_reg,
             upper(vw_mov.tipo_reg::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                       AS tipo_reg,
             upper(vw_mov.custodian::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                      AS custodian,
             upper(vw_mov.client_id::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                      AS client_id,
             vw_mov.account_no,
             upper(vw_mov.name::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                           AS name,
             upper(vw_mov.process_date::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                   AS process_date,
             fn_fecha_date_to_string(vw_mov.trade_date, 'YYYYMMDD'::character varying,
                                     '-'::character varying)::character varying(100)                                                                                                                                                                                                                                                                                                                    AS trade_date,
             fn_fecha_date_to_string(vw_mov.settlement_date, 'YYYYMMDD'::character varying,
                                     '-'::character varying)::character varying(100)                                                                                                                                                                                                                                                                                                                    AS settlement_date,
             upper(vw_mov.activity::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                       AS activity,
             upper(vw_mov.buy_sell_value::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                 AS buy_sell,
             vw_mov.quantity,
             vw_mov.price,
             vw_mov.commission                                                                                                                                                                                                                                                                                                                                                                          AS comission,
             vw_mov.fees,
             vw_mov.net_amount,
             vw_mov.usde_net_amount,
             vw_mov.principal,
             upper(vw_mov.cusip::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                          AS cusip,
             upper(vw_mov.symbol::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                         AS symbol,
             upper(vw_mov.isin::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                           AS isin,
             upper(vw_mov.currency::text)::character varying(1000)                                                                                                                                                                                                                                                                                                                                      AS currency,
             vw_mov.fx_rate,
             vw_mov.interest,
             upper(vw_mov.currency_base::text)::character varying(1000)                                                                                                                                                                                                                                                                                                                                 AS currency_base,
             upper(vw_mov.cash_margin::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                    AS cash_margin_account,
             upper(vw_mov.product_type::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                   AS product_type,
             upper(vw_mov.security_description::text)::character varying(100)                                                                                                                                                                                                                                                                                                                           AS security_description,
             upper(vw_mov.activity_description::text)::character varying(100)                                                                                                                                                                                                                                                                                                                           AS activity_description,
             upper(vw_mov.activity_code::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                  AS activity_code,
             upper(vw_mov.source_code::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                    AS source_code,
             upper(vw_mov.description_1)::character varying(100)                                                                                                                                                                                                                                                                                                                                        AS description1,
             upper(vw_mov.description_2)::character varying(100)                                                                                                                                                                                                                                                                                                                                        AS description2,
             upper(vw_mov.description_3)::character varying(100)                                                                                                                                                                                                                                                                                                                                        AS description3,
             upper(vw_mov.ticker::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                         AS ticker,
             upper(vw_mov.id_sub_sub_tipo::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                AS id_sub_sub_tipo_activo,
             upper(vw_mov.id_sub_tipo::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                    AS id_sub_tipo_activo,
             upper(vw_mov.id_tipo::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                        AS id_tipo_activo,
             upper(vw_mov.nombre_sub_sub_tipo::text)::character varying(100)                                                                                                                                                                                                                                                                                                                            AS nombre_sub_sub_tipo_activo,
             vw_mov.flujo_neto                                                                                                                                                                                                                                                                                                                                                                          AS aplica_flujo_neto,
             upper(vw_mov.office_id::text)::character varying(100)                                                                                                                                                                                                                                                                                                                                      AS office_id,
             upper(vw_mov.id_cuenta_custodio::text)::character varying(100)                                                                                                                                                                                                                                                                                                                             AS id_cuenta_custodio,
             vw_mov.ingreso_egreso,
             vw_mov.retiro,
             vw_mov.recaudo
      FROM tbvw_maestro_movimientos_pershing vw_mov
      UNION
      SELECT 'C'::text                                                                  AS src_vw,
             rank() OVER (ORDER BY mov_no_inf.id)                                       AS row_id,
             mov_no_inf.id                                                              AS id_reg,
             upper(mov_no_inf.tipo_reg::text)::character varying(100)                   AS tipo_reg,
             upper(mov_no_inf.custodian::text)::character varying(100)                  AS custodian,
             upper(mov_no_inf.client_id::text)::character varying(100)                  AS client_id,
             mov_no_inf.account_no::character varying(100)                              AS account_no,
             upper(mov_no_inf.name::text)::character varying(100)                       AS name,
             upper(mov_no_inf.process_date::text)::character varying(100)               AS process_date,
             upper(mov_no_inf.trade_date::text)::character varying(100)                 AS trade_date,
             upper(mov_no_inf.settlement_date::text)::character varying(100)            AS settlement_date,
             upper(mov_no_inf.activity::text)::character varying(100)                   AS activity,
             upper(mov_no_inf.buy_sell::text)::character varying(100)                   AS buy_sell,
             mov_no_inf.quantity,
             mov_no_inf.price,
             mov_no_inf.comission,
             mov_no_inf.fees,
             mov_no_inf.net_amount,
             mov_no_inf.usde_net_amount,
             mov_no_inf.principal,
             upper(mov_no_inf.cusip::text)::character varying(100)                      AS cusip,
             upper(mov_no_inf.symbol::text)::character varying(100)                     AS symbol,
             upper(mov_no_inf.isin::text)::character varying(100)                       AS isin,
             upper(mov_no_inf.currency::text)::character varying(1000)                  AS currency,
             mov_no_inf.fx_rate,
             mov_no_inf.interest,
             upper(mov_no_inf.currency_base::text)::character varying(1000)             AS currency_base,
             upper(mov_no_inf.cash_margin_account::text)::character varying(1000)       AS cash_margin_account,
             upper(mov_no_inf.product_type::text)::character varying(100)               AS product_type,
             upper(mov_no_inf.security_description::text)::character varying(100)       AS security_description,
             upper(mov_no_inf.activity_description::text)::character varying(100)       AS activity_description,
             upper(mov_no_inf.activity_code::text)::character varying(100)              AS activity_code,
             upper(mov_no_inf.source_code::text)::character varying                     AS source_code,
             upper(mov_no_inf.description1::text)::character varying(100)               AS description1,
             upper(mov_no_inf.description2::text)::character varying(100)               AS description2,
             upper(mov_no_inf.description3::text)::character varying(100)               AS description3,
             upper(mov_no_inf.ticker::text)::character varying(100)                     AS ticker,
             upper(mov_no_inf.id_sub_sub_tipo_activo::text)::character varying(100)     AS id_sub_sub_tipo_activo,
             upper(mov_no_inf.id_sub_tipo_activo::text)::character varying(100)         AS id_sub_tipo_activo,
             upper(mov_no_inf.id_tipo_activo::text)::character varying(100)             AS id_tipo_activo,
             upper(mov_no_inf.nombre_sub_sub_tipo_activo::text)::character varying(100) AS nombre_sub_sub_tipo_activo,
             mov_no_inf.aplica_flujo_neto,
             upper(mov_no_inf.office_id::text)::character varying(100)                  AS office_id,
             upper(mov_no_inf.id_cuenta_custodio::text)::character varying(100)         AS id_cuenta_custodio,
             NULL::boolean                                                              AS ingreso_egreso,
             NULL::numeric(45, 20)                                                      AS retiro,
             NULL::numeric(45, 20)                                                      AS recaudo
      FROM rectificacion_movimientos_no_informados mov_no_inf
      WHERE mov_no_inf.id_estado_rectificacion = 0) vw_union
ORDER BY process_date, client_id, account_no, product_type, cusip;

alter table public.vw_reporte_maestro_datos_movimientos
    owner to postgres;

