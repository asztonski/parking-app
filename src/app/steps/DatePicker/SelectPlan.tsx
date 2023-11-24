type SelectPlanProps = {
    onChange: () => void,
    value: string
}

export const SelectPlan:React.FC<SelectPlanProps> = ({ onChange, value }) => {

  return (
    <div className="w-full bg-secondary text-primary text-2xl p-4">
      <select
        className="w-full bg-transparent"
        value={value}
        onChange={onChange}
      >
        <option value="standard">Standard - 30$ per day</option>
        <option value="premium">Premium - 50$ per day</option>
      </select>
    </div>
  );
};
