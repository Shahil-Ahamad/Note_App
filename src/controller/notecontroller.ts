import { NextFunction, Request, Response } from "express";
import { NoteModel } from "../models/note-model";

/**
 * This file contains code related to note controller
 */

export function getNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const noteId = req.query.noteId;

  if (!noteId) {
    next("Please provide a valid noteId");
    return;
  }

  const mynoteModel = new NoteModel();
  const note = mynoteModel.getNote(parseInt(noteId as string));

  if (!note) {
    res.status(404).json({
      message: "note not found",
    });
    return;
  }

  res.json({
    data: note,
  });
}

export function createNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { Title, name, status } = req.body;

  if (!Title || !name || !status) {
    res.status(400).json({
      message: "Name and status are required",
    });
    return;
  }

  const mynoteModel = new NoteModel();
  const creatednote = mynoteModel.createNote(Title, name, status);

  res.status(201).json({
    data: creatednote,
    message: "note is created successfully!",
  });
}

export function deleteNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const noteId = req.query.noteId;

  if (!noteId) {
    res.status(400).json({
      message: "Please provide a valid noteId",
    });
    return;
  }

  const mynoteModel = new NoteModel();
  const isDeleted = mynoteModel.deleteNote(parseInt(noteId as string));

  if (!isDeleted) {
    res.status(404).json({
      message: "note not found",
    });
    return;
  }

  res.json({
    message: "note deleted successfully!",
  });
}

export function getAllNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const mynoteModel = new NoteModel();
  const allnotes = mynoteModel.getAllNotes();

  res.json({
    data: allnotes,
  });
}

export function updateNoteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const noteId = req.query.noteId;
  const { Title, name, status } = req.body;

  if (!noteId || !name || !status) {
    res.status(400).json({
      message: "Please provide valid noteId, name, and status",
    });
    return;
  }

  const mynoteModel = new NoteModel();
  const updatednote = mynoteModel.updateNote(
    parseInt(noteId as string),
    Title,
    name,
    status
  );

  if (!updatednote) {
    res.status(404).json({
      message: "note not found or not updated",
    });
    return;
  }

  res.json({
    data: updatednote,
    message: "note updated successfully!",
  });
}
