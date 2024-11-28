import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import SliderItem from './SliderItem';

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(10).keys()];
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.FlatList
      data={items}
      renderItem={({index, item}) => (
        <SliderItem
          item={item}
          index={index}
          isLast={index === items.length - 1}
          scrollX={scrollX}
          onPress={() => setActiveIndex(index)}
          isActive={activeIndex === index}
        />
      )}
      horizontal
      shouldRasterizeIOS
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={onScrollHandler}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default CarouselSlider;
