type Props = {
  className?: string;
};

const Sidebar = ({ className = "" }: Props) => {
  return <aside className={className}>Sidebar</aside>;
};

export default Sidebar;
