/**
 * Created by Александр on 24.12.2016.
 */

export const COMMAND_ACTION = "cmdAction";
export const COMMAND_EDIT = "cmdEdit";
export const COMMAND_REMOVE = "cmdRemove";
export const COMMAND_SAVE = "cmdSave";
export const COMMAND_CANCEL = "cmdCancel";


export const navBarMenu = [
  {
    type: 'button',
    command: COMMAND_REMOVE,
    icon: "ti-cut",
    title: "remove record",
    isVisible: false
  },
  {
    type: 'button',
    command: COMMAND_EDIT,
    icon: "ti-pencil-alt",
    title: "edit record",
    isVisible: false
  },
  {
    type: 'button',
    command: COMMAND_CANCEL,
    icon: "ti-back-left",
    title: "cancel record",
    isVisible: false
  },
  {
    type: 'button',
    command: COMMAND_SAVE,
    icon: "ti-save",
    title: "save record",
    isVisible: false
  },
]


