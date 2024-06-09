import styles from "./chatsPage.module.scss";

export const tmpl = `
<div class="wrapper">
  <main class="main-container">
    {{{Navigation}}}
    <div class="main-item ${styles["chat-container"]}">
      <div class=${styles["list"]}>
        <div class=${styles["profile"]}>
          {{#each buttons}}
           {{{ Button onClick=onClick label=this.label class=this.class }}}
          {{/each}}
        </div>
        {{{ Search }}}
        <div class=${styles["chats"]}>
          {{#if chats}}
            {{#each chats}}
            {{{ ChatPreview
              onClick=onClick chatName=this.chatName unreadMessages=this.unreadMessages dateLastMessage=this.dateLastMessage lastMessage=this.lastMessage }}}
            {{/each}}
          {{/if}}
        </div>
      </div>
      {{#if id}}
      <div class=${styles["chat-viewport"]}>
        <div class=${styles["chat-viewport__header"]}>
          {{{ UserAvatar userName=chatName small='true' }}}
          {{{ ButtonAddDeleteUser }}}
        </div>
        <div class=${styles["chat-viewport__messages"]}>
          {{#each messages}}
          {{{ ChatMessage message=this.message userCurrent=this.userCurrent
          time=this.time }}}
          {{/each}}
        </div>
        <div class=${styles["chat-viewport__footer"]}>
          {{{ ChatSend }}}
        </div>
      </div>
      {{/if}}
    </div>
  </main>
</div>
`;
