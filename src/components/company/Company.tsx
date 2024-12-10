import {
  Image,
  ImageRequireSource,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '@/theme/spacing';
import Text from '@/components/text/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {typography} from '@/theme/typography';
import {colors} from '@/theme/colors';
import {DropdownMenu, MenuOption} from '../dropdownmenu/DropDownMenu';
import {IAPIResponse, ICompany, ILoginUserResponse} from '@/types';
import {apiRoutes} from '@/utils/apiRoutes';
import axios from '@/utils/axios';
import CookieManager from '@react-native-cookies/cookies';
import {config} from '@/config';
import {useQueryClient} from '@tanstack/react-query';
type Props = ICompany & {
  isLast?: boolean;
};
const Company = ({name, isLast, createdAt, _id}: Props) => {
  const [visible, setVisible] = useState(false);
  const queryClient = useQueryClient();
  const handleJoinCompany = async () => {
    try {
      const resp = (await axios
        .post(`${apiRoutes.auth.loginCompany}/${_id}`)
        .then(res => res.data)) as IAPIResponse<ILoginUserResponse>;
      const data = resp?.data;
      if (!data || !data?.accessToken) {
        throw new Error('No data found');
      }
      await CookieManager.set(config.API_BASE_URL, {
        name: 'accessToken',
        value: data?.accessToken,
      });

      if (data?.refreshToken) {
        await CookieManager.set(config.API_BASE_URL, {
          name: 'refreshToken',
          value: data?.refreshToken || '',
        });
      }
      queryClient.invalidateQueries({
        queryKey: [apiRoutes.auth.profile, {accessToken: data?.accessToken}],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.company, !isLast && {marginBottom: spacing[2]}]}>
      <TouchableOpacity
        onPress={handleJoinCompany}
        activeOpacity={0.9}
        style={styles.loginCompany}>
        {/* <Image style={styles.companyLogo} source={logo} /> */}
        <View>
          <Text preset="small" style={styles.companyName}>
            {name}
          </Text>
          <Text preset="xsmall" style={{color: colors['secondary-foreground']}}>
            {new Date(createdAt).toDateString()}
          </Text>
        </View>
      </TouchableOpacity>
      <DropdownMenu
        align="right"
        visible={visible}
        handleClose={() => setVisible(false)}
        handleOpen={() => setVisible(true)}
        style={styles.menuStyle}
        trigger={
          <View>
            <Icon name="more-vert" size={18} />
          </View>
        }>
        <MenuOption onSelect={() => {}}>
          <Text style={{color: colors['secondary-foreground']}}>
            View Details
          </Text>
        </MenuOption>
      </DropdownMenu>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  company: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    padding: spacing[2],
    borderWidth: 1,
    borderRadius: spacing[1],
  },
  loginCompany: {
    flex: 1,
    flexDirection: 'row',
    gap: spacing[2],
  },
  companyLogo: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  companyName: {
    fontWeight: 'bold',
    fontFamily: typography.primaryMedium,
    color: colors['secondary-foreground'],
  },
  menuStyle: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
  },
});
