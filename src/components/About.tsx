
const About = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>This was a lot of fun!</p>
      <p>I've intentionally overengineered a few things, just to demonstrate comptency with various elements. For example, the &lt;About&gt; and &lt;Autocomplete&gt;
        components within /header, that are then put through an HOC just to give them a unique ID, is overkill.</p>
      <p>The styles folder is an organizational pattern I've used on most of my personal projects at this point, I yanked it over.</p>
      <p>The name parsing I did with humanparser.</p>
    </div>
  );
};

export default About;
