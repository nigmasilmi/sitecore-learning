import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useThemeContext } from 'src/contexts/theme/ThemeProvider';

type TestComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const TestComponent = (props: TestComponentProps): JSX.Element => {
  const something = useThemeContext();
  console.log(something);

  return (
    <div>
      <p className="heading-1">TestComponent Component</p>
      <Text field={props.fields.heading} />
    </div>
  );
};

export default withDatasourceCheck()<TestComponentProps>(TestComponent);
