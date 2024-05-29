import { registerComponent } from "./registerComponent";
import {
  Input,
  FormInput,
  Button,
  ValidationInput,
  Navigation,
  Search,
  ChatPreview,
  UserAvatar,
  ButtonAddDeleteUser,
  ChatMessage,
  ChatSend,
  MessageInput,
  ButtonSendMessage,
} from "@app/components";

export const register = () => {
  registerComponent("Input", Input);
  registerComponent("FormInput", FormInput);
  registerComponent("Button", Button);
  registerComponent("ValidationInput", ValidationInput);
  registerComponent("Navigation", Navigation);
  registerComponent("Search", Search);
  registerComponent("ChatPreview", ChatPreview);
  registerComponent("UserAvatar", UserAvatar);
  registerComponent("ButtonAddDeleteUser", ButtonAddDeleteUser);
  registerComponent("ChatMessage", ChatMessage);
  registerComponent("ChatSend", ChatSend);
  registerComponent("MessageInput", MessageInput);
  registerComponent("ButtonSendMessage", ButtonSendMessage);
};
