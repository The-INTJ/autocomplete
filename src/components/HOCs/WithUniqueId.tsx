import { WithUniqueIdProps } from '../../lib/types'; // Import the type
import { generateUniqueId } from '../../lib/helpers';

const WithUniqueId = <P extends object>(WrappedComponent: React.ComponentType<P & WithUniqueIdProps>) => {
    const uniqueId = generateUniqueId();
  return (props: P) => {

    // Render the WrappedComponent with the new uniqueId and the original props
    return <WrappedComponent {...props as P} uniqueId={uniqueId} />;
  };
};

export default WithUniqueId;