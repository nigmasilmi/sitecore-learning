import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TestComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const TestComponent = (props: TestComponentProps): JSX.Element => (
  <div>
    <p>TestComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<TestComponentProps>(TestComponent);
