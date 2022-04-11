import { Container } from './styles';

import Category from '../Category';
import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string,
  setCategory: (categoryId: string) => void,
  hasCheckBox?: boolean;
}

export default function CategorySelect({ 
  categorySelected, 
  setCategory,
  hasCheckBox = false 
}: Props){
  return (
    <Container
        horizontal
        showsHorizontalScrollIndicator
        contentContainerStyle={{ paddingRight: 40 }}
    >
        { 
          categories.map(category => (
            <Category 
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress={() => setCategory(category.id)}
              hasCheckBox={hasCheckBox}
            />
          ))
        }

    </Container>
  );
}