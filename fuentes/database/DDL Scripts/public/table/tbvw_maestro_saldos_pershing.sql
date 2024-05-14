create table public.tbvw_maestro_saldos_pershing
(
    custodian                  varchar(100),
    tipo_reg                   varchar(100),
    client_id                  varchar(100),
    firm_no                    varchar(100),
    sub_no                     varchar(100),
    office_id                  varchar(100),
    rep_no                     varchar(100),
    rep                        varchar(100),
    account_no                 text,
    name                       varchar(100),
    process_date               varchar(100),
    symbol                     varchar(100),
    cusip                      varchar(100),
    isin_code                  varchar(100),
    product_type               varchar(100),
    security_description       varchar(100),
    cash_margin_account        varchar(100),
    quantity                   numeric,
    market_price               numeric(45, 20),
    id_currency                varchar(100),
    currency                   varchar(100),
    market_value               numeric(45, 20),
    fx_rate                    numeric(45, 20),
    usde_market_value          numeric(45, 20),
    advisory_fee_anual         numeric(45, 20),
    factor                     integer,
    comision_devengada_diaria  numeric(45, 20),
    usde_market_price          numeric(45, 20),
    sec_no                     integer,
    desc_1                     varchar(100),
    desc_2                     varchar(100),
    desc_3                     varchar(100),
    sedol                      varchar(100),
    ticker                     varchar(100),
    id_sub_sub_tipo_activo     varchar(100),
    id_sub_tipo_activo         varchar(100),
    id_tipo_activo             varchar(100),
    nombre_sub_sub_tipo_activo varchar(1000),
    sec_id                     varchar(100)
);

alter table public.tbvw_maestro_saldos_pershing
    owner to postgres;
