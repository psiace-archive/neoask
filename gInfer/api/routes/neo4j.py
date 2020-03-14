from urllib import parse

import py2neo
from fastapi import APIRouter, Body, Depends, FastAPI, HTTPException
from py2neo import Graph
from starlette.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from gInfer.db.events import neo_db
from gInfer.model.neo4j import *
from loguru import logger

router = APIRouter()
graph = neo_db

@router.get("/match_entity_by_name/{name}")
def api_match_entity_by_name(name):
    name = parse.unquote(name)
    answer = match_entity_by_name(graph, name)
    return answer

@router.get("/get_entity_relation_by_entity/{name}")
def api_get_entity_relation_by_entity(name):
    name = parse.unquote(name)
    answer = get_entity_relation_by_entity(graph, name)
    return answer

@router.get("/find_relation_by_first_entity/{name}")
def api_find_relation_by_first_entity(name):
    name = parse.unquote(name)
    answer = find_relation_by_first_entity(graph, name)
    return answer

@router.get("/find_relation_by_second_entity/{name}")
def api_find_relation_by_second_entity(name):
    name = parse.unquote(name)
    answer = find_relation_by_second_entity(graph, name)
    return answer

@router.get("/find_entities_by_first_entity_and_relation/{name}-{relation}")
def api_get_entity_relation_by_entity(name,relation):
    name = parse.unquote(name)
    relation = parse.unquote(relation)
    answer = find_entities_by_first_entity_and_relation(graph, name, relation)
    return answer

@router.get("/find_entities_by_second_entity_and_relation/{name}-{relation}")
def api_get_entity_relation_by_entity(name,relation):
    name = parse.unquote(name)
    relation = parse.unquote(relation)
    answer = find_entities_by_second_entity_and_relation(graph, name, relation)
    return answer

@router.get("/find_relation_by_entities/{name1}-{name2}")
def api_find_relation_by_entities(name1,name2):
    name1 = parse.unquote(name1)
    name2 = parse.unquote(name2)
    answer = find_relation_by_entities(graph, name1, name2)
    return answer

@router.get("/find_entity_relation/{name1}-{relation}-{name2}")
def api_get_entity_relation_by_entity(name1,relation,name2):
    name1 = parse.unquote(name1)
    relation = parse.unquote(relation)
    name2 = parse.unquote(name2)
    answer = find_entity_relation(graph, name1, relation, name2)
    return answer
