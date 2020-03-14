from fastapi import APIRouter

from gInfer.api.routes import neo4j

router = APIRouter()
router.include_router(neo4j.router, tags=["neo4j"], prefix="/neo4j")