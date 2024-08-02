import { createContext } from "react";

type BlockEditorRootType = {};

const BlockEditorRootContext = createContext<BlockEditorRootType>({});

export type { BlockEditorRootType };
export default BlockEditorRootContext;
