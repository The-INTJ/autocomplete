import styles from '../styles/components/About.module.scss';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className={styles.aboutSection}>
        <p>This was a lot of fun!</p>

        <p>I've intentionally overengineered a few things, just to demonstrate competency with various elements. For example, the <code>&lt;About&gt;</code> and <code>&lt;Autocomplete&gt;</code> components within <code>/header</code>, that are then put through an HOC just to give them a unique ID, is probably overkill. Additionally, the header is technically static at the moment, so we wouldn't even need unique IDs.</p>

        <p>It is, however, dynamic-ready, and if other components are passed to it, it will give them unique IDs. This comes with the caveat that in its current implementation, Typescript does not actually enforce the <code>HeaderProps</code> on JSX elements like text. Future implementations could just use the helper function and assign a unique value that way.</p>

        <p>The styles folder is an organizational pattern I've used on most of my personal projects at this point, I yanked it over.</p>

        <p>The name parsing I did with humanparser.</p>

        <p>The project is also ADA compliant, with proper tab roles, section definitions, and follows rules like header order and use case.</p>

        <p>Did not have my linter set up, so there may be some inconsistent styling application for code look and feel. I do find code standards critically important on projects as they increase in size and complexity, and it is not something I would overlook when working with others. Being solo for this, however, I elected not to get in a fight with prettier.</p>
      </div>

    </div>
  );
};

export default About;
