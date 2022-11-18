//! `SeaORM` Entity. Generated by sea-orm-codegen 0.10.3

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Copy, Clone, Default, Debug, DeriveEntity)]
pub struct Entity;

impl EntityName for Entity {
    fn table_name(&self) -> &str {
        "sys_dict_type"
    }
}

#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel, Eq, Serialize, Deserialize)]
pub struct Model {
    pub dict_type_id: String,
    pub dict_name: String,
    pub dict_type: String,
    pub status: String,
    pub create_by: String,
    pub update_by: Option<String>,
    pub remark: Option<String>,
    pub created_at: Option<DateTime>,
    pub updated_at: Option<DateTime>,
    pub deleted_at: Option<DateTime>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    DictTypeId,
    DictName,
    DictType,
    Status,
    CreateBy,
    UpdateBy,
    Remark,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
}

#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]
pub enum PrimaryKey {
    DictTypeId,
}

impl PrimaryKeyTrait for PrimaryKey {
    type ValueType = String;
    fn auto_increment() -> bool {
        false
    }
}

#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {}

impl ColumnTrait for Column {
    type EntityName = Entity;
    fn def(&self) -> ColumnDef {
        match self {
            Self::DictTypeId => ColumnType::String(Some(32u32)).def(),
            Self::DictName => ColumnType::String(Some(100u32)).def(),
            Self::DictType => ColumnType::String(Some(100u32)).def().unique(),
            Self::Status => ColumnType::Char(Some(1u32)).def(),
            Self::CreateBy => ColumnType::String(Some(32u32)).def(),
            Self::UpdateBy => ColumnType::String(Some(32u32)).def().null(),
            Self::Remark => ColumnType::String(Some(500u32)).def().null(),
            Self::CreatedAt => ColumnType::DateTime.def().null(),
            Self::UpdatedAt => ColumnType::DateTime.def().null(),
            Self::DeletedAt => ColumnType::DateTime.def().null(),
        }
    }
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        panic!("No RelationDef")
    }
}

impl ActiveModelBehavior for ActiveModel {}
