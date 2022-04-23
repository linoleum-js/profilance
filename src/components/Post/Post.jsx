

export const Post = ({ data, onApprove, onRemove, needsApprove }) => {
  return (
    <article>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <div>
        <div>
          {data.createdAt}
        </div>
        {needsApprove &&
          <div>
            <button onClick={() => onApprove(data.id)}>Approve</button>
            <button onClick={() => onRemove(data.id)}>Remove</button>
          </div>
        }
      </div>
    </article>
  );
};

