function CheckBox({ className }: { className?: string }) {
  return (
    <div className={`` + className}>
      <input
        type="checkbox"
        className="w-full h-full rounded-md border border-[#9E9DA8]"
      />
    </div>
  );
}

export default CheckBox;
