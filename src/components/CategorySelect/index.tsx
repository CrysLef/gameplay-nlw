import { Container } from './styles'

import Category from '../Category'

import { categories } from '../../utils/categories'

type Props = {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
}


export default function CategorySelect({ 
  categorySelected, 
  hasCheckBox = false, 
  setCategory
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
  )
}