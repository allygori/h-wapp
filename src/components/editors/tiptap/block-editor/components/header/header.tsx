type Props = {
  className?: string;
};

const Header = ({ className = "" }: Props) => {
  return (
    <header className={className}>
      <div className="flex flex-row items-center justify-between">
        <div>Toggle Sidebar</div>
        <div>
          <p>29 words</p>
          <p>126 characters</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
