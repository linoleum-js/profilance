

export const Post = ({ data }) => {
  console.log('post')
  return (
    <article>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <div>
        <div>
          {data.createdAt}
        </div>
      </div>
    </article>
  );
};

