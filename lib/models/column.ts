import mongoose, { Schema, Document } from 'mongoose';

export interface IColumn extends Document {
    name: string;
    boardId: mongoose.Types.ObjectId;
}

const BoardSchema = new Schema<IBoard>({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        requird: true,
        index: true,
    },
    columns: [
        {
            type: Schema.Types.ObjectId,
            ref: "Column",
        },
    ],
},
    {
        timestamps: true,
    }
);

export default mongoose.models.Board || mongoose.model<IBoard>("Board", BoardSchema);
