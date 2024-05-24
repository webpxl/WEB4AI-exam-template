from typing import Optional
from fastapi import Body, FastAPI
from pydantic import BaseModel
from sqlmodel import Field, Session, SQLModel, create_engine, select, delete
from starlette.middleware.cors import CORSMiddleware
from datetime import datetime


app = FastAPI()

# Don't touch this
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"])

class Message(SQLModel, table=True):
    id: int = Field(primary_key=True)
    text: str

engine = create_engine("sqlite:///database_test.db")
SQLModel.metadata.create_all(engine)
    
@app.get("/msg/{id}", tags=["General data"], summary="Get a specific message")
async def get_message(id: int):
    with Session(engine) as session:
        statement = select(Message).where(Message.id == id)
        msg = session.exec(statement).first()
        return msg