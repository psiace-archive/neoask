from py2neo import Graph, Node, Relationship, cypher, Path
from loguru import logger


def match_entity_by_name(graph, value):
    sql = "MATCH (n:entity { name: '" + str(value) + "' }) return n;"
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer


# 根据 entity 的名称返回关系
def get_entity_relation_by_entity(graph, value):
    sql = (
        'MATCH (entity1) - [rel] -> (entity2)  WHERE entity1.name = "'
        + str(value)
        + '" RETURN rel,entity2'
    )
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer


# 查找 entity1 及其对应的关系（与 getEntityRelationbyEntity 的差别就是返回值不一样）
def find_relation_by_first_entity(graph, entity1):
    sql = 'MATCH (n1 {name:"' + str(entity1) + '"})- [rel] -> (n2) RETURN n1,rel,n2'
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer


# 查找 entity2 及其对应的关系
def find_relation_by_second_entity(graph, entity1):
    sql = 'MATCH (n1)- [rel] -> (n2 {name:"' + str(entity1) + '"}) RETURN n1,rel,n2'
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer


# 根据 entity1 和关系查找 enitty2
def find_entities_by_first_entity_and_relation(graph, entity, relation):
    sql = (
        'MATCH (n1 {name:"'
        + str(entity)
        + '"})- [rel:`'
        + str(relation)
        + "`] -> (n2) RETURN n1,rel,n2"
    )
    logger.info(sql)
    answer = graph.run(sql).data()

    return answer


# 根据 entity2 和关系查找 enitty1
def find_entities_by_second_entity_and_relation(graph, entity, relation):
    sql = (
        "MATCH (n1)- [rel:`"
        + str(relation)
        + '`] -> (n2 {name:"'
        + str(entity)
        + '"}) RETURN n1,rel,n2'
    )
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer


# 根据两个实体查询它们之间的最短路径
def find_relation_by_entities(graph, entity1, entity2):
    sql = (
        'MATCH (p1:entity {name:"'
        + str(entity1)
        + '"}),(p2:entity {name:"'
        + str(entity2)
        + '"}),p=allshortestpaths((p1)-[*]-(p2)) RETURN p'
    )
    logger.info(sql)
    answer = graph.run(sql).evaluate()
    relationDict = []
    if answer is not None:
        for x in answer:
            tmp = {}
            start_node = x.start_node
            end_node = x.end_node
            tmp["n1"] = start_node
            tmp["n2"] = end_node
            tmp["rel"] = x
            relationDict.append(tmp)
    return relationDict


# 查询数据库中是否有对应的实体-关系匹配
def find_entity_relation(graph, entity1, relation, entity2):
    sql = (
        'MATCH (n1:entity {name:"'
        + str(entity1)
        + '"})- [rel:`'
        + str(relation)
        + '`] -> (n2:entity {name:"'
        + str(entity2)
        + '"}) RETURN n1,rel,n2'
    )
    logger.info(sql)
    answer = graph.run(sql).data()
    return answer

