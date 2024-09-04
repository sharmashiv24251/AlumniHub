import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentChat, sendMessage } from "@/redux/messagingSlice";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MessagingCenter = () => {
  const dispatch = useDispatch();
  const alumni = useSelector((state) => state.alumni);
  const { messages, currentChat } = useSelector((state) => state.messaging);
  const [newMessage, setNewMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && currentChat) {
      dispatch(
        sendMessage({
          id: messages.length + 1,
          senderId: 1, // Assuming current user's ID is 1
          receiverId: currentChat,
          content: newMessage,
          timestamp: new Date().toISOString(),
        })
      );
      setNewMessage("");
    }
  };

  const filteredMessages = messages.filter(
    (msg) => msg.senderId === currentChat || msg.receiverId === currentChat
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const UserList = () => (
    <div className="space-y-2 p-4">
      {alumni.map((alum) => (
        <button
          key={alum.id}
          className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-muted"
          onClick={() => {
            dispatch(setCurrentChat(alum.id));
            setSidebarOpen(false);
          }}
        >
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={alum.profileImage} alt={alum.name} />
            <AvatarFallback>{alum.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <div className="font-medium">{alum.name}</div>
            <div className="text-sm text-muted-foreground">{alum.job}</div>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full bg-muted/20">
      {/* Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } w-80 border-r bg-background sm:block absolute sm:relative z-10 h-full`}
      >
        <div className="h-full overflow-auto">
          <UserList />
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {currentChat ? (
          <>
            <div className="flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Button>
                <Avatar className="h-10 w-10 border">
                  <AvatarImage
                    src={alumni.find((a) => a.id === currentChat)?.profileImage}
                    alt="Contact Name"
                  />
                  <AvatarFallback>
                    {alumni
                      .find((a) => a.id === currentChat)
                      ?.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {alumni.find((a) => a.id === currentChat)?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {alumni.find((a) => a.id === currentChat)?.job}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              <div className="space-y-4">
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${
                      msg.senderId === 1 ? "justify-end" : ""
                    }`}
                  >
                    {msg.senderId !== 1 && (
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage
                          src={
                            alumni.find((a) => a.id === msg.senderId)
                              ?.profileImage
                          }
                          alt="Contact Avatar"
                        />
                        <AvatarFallback>
                          {alumni
                            .find((a) => a.id === msg.senderId)
                            ?.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[65%] rounded-lg ${
                        msg.senderId === 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      } p-3`}
                    >
                      <div>{msg.content}</div>
                      <div className="mt-1 text-xs opacity-80">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                    {msg.senderId === 1 && (
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage
                          src={alumni.find((a) => a.id === 1)?.profileImage}
                          alt="Your Avatar"
                        />
                        <AvatarFallback>
                          {alumni.find((a) => a.id === 1)?.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t bg-background p-3 sm:p-4 mb-12 md:mb-0">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2"
              >
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <span className="sr-only">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
              <h2 className="text-lg font-semibold">Chats</h2>
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>
            <div className="flex-1 overflow-auto">
              <UserList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingCenter;
