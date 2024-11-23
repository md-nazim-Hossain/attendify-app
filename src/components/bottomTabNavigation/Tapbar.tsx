import React, {useEffect, useMemo, useRef, useState} from 'react';
import {TabViewProps, Route} from 'react-native-tab-view';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Measure} from '@/types';
import TabBarItem from './TapbarItem';
import TabBarIndicator from './TapbarIndicator';

type Props<T extends Route> = Parameters<
  NonNullable<TabViewProps<T>['renderTabBar']>
>[0] & {
  onIndexChange: (index: number) => void;
};

const TabBar = <T extends Route>(props: Props<T>) => {
  const containerRef = useRef<View | null>(null);
  const inputRange = props.navigationState.routes.map((_, i) => i);
  const [measures, setMeasures] = useState<Measure[]>([]);

  const refs = useMemo(
    () =>
      [...new Array(props.navigationState.routes.length)].map(() =>
        React.createRef<View>(),
      ),
    [props.navigationState.routes.length],
  );

  useEffect(() => {
    const measureValues: Measure[] = [];

    setTimeout(() => {
      refs.forEach(r => {
        if (!r.current) {
          return;
        }

        r.current.measureLayout(
          containerRef.current as any,
          (x, y, width, height) => {
            console.log('refs: ', x, y, width, height);

            measureValues.push({
              x,
              y,
              width,
              height,
            });
          },
          () => {},
        );
      });

      setMeasures(measureValues);
    });
  }, [refs]);

  return (
    <View style={styles.container} ref={containerRef}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputRangeIndex =>
            inputRangeIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <TabBarItem
            key={i}
            onPress={props.onIndexChange}
            index={i}
            opacity={opacity}
            ref={refs[i]}>
            {route.title}
          </TabBarItem>
        );
      })}
      {measures.length > 0 && (
        <TabBarIndicator
          measures={measures}
          position={props.position}
          navigationState={props.navigationState}
        />
      )}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(255, 255, 255, 0.24)',
  },
});
