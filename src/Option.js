function Option(props) {
  return (
    <>
      <div className="Option" onClick={() => props.handleClick(props.id)}>
        {props.country}
      </div>
    </>
  );
}

export default Option;
