import { PureComponent } from 'react';

/**
 * Base component for stateful React components
 * Usually you might prefer (stateless) BaseComponent instead of this class
 */
export class BaseStatefulComponent<P, S> extends PureComponent<P, S> {}
