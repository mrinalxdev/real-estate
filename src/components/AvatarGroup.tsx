import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarGroup = () => {
  const agents = [
    {
      name: "AM",
      image:
        "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "AM",
      image:
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "AM",
      image:
        "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "AM",
      image:
        "https://images.unsplash.com/photo-1672675389084-5415d558dfd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <div className="flex -space-x-3">
      {agents.map((agent, i) => (
        <Avatar key={i} className="border-2 border-black/10 w-8 h-8">
          <AvatarImage src={agent.image} />
          <AvatarFallback>{agent.name}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default AvatarGroup;
