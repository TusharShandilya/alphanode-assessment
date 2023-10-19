interface Props {
  children: React.ReactNode;
}

const FieldError = ({ children }: Props) => {
  return <span className="text-sm text-red-800 mt-1">⚠️ {children}</span>;
};

export default FieldError;
