import { WithUniqueIdProps } from '../../lib/types';
import { generateUniqueId } from '../../lib/helpers';

const WithUniqueId = <P extends object>(WrappedComponent: React.ComponentType<P & WithUniqueIdProps>) => {
    const uniqueId = generateUniqueId();
  return (props: P) => {

    return <WrappedComponent {...props as P} uniqueId={uniqueId} />;
  };
};

export default WithUniqueId;