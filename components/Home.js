import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/color';
import {FlatList} from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  const renderCategoriesItem = ({item}) => {
    return (
      <View
        key={item.id}
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.background,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected
                ? colors.background
                : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            style={styles.categoryItemIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* {header} */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              width="50"
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.background} />
          </View>
        </SafeAreaView>
        {/* {Title} */}
        <View style={styles.titlesWrappers}>
          <Text style={styles.titleSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>
        {/* {Search} */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
        {/* {categories} */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoriesItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* {Popular} */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Detail', {
                  item: item,
                })
              }>
              <View
                key={item.id}
                style={[
                  styles.popularCartWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularToWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={14}
                        color={colors.primary}
                      />
                      <Text style={styles.popularToText}>Top of the week</Text>
                    </View>
                    {/* <!--Break--> */}
                    <View style={styles.popularTitleWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                    {/* <!--Break--> */}
                    <View style={styles.popularCartButton}>
                      <View style={styles.addPizzaButton}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textDark}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCartRight}>
                  <Image source={item.image} style={styles.popularCartImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: colors.primary,
    height: 50,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  titlesWrappers: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleSubtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    color: colors.textLight,
    fontSize: 14,
    marginBottom: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },

  categoriesTitle: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },

  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categoryItemIcon: {
    alignSelf: 'center',
  },
  //Popular Category//
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularCartWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularToWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularToText: {
    marginLeft: 10,
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    color: colors.textDark,
    fontSize: 12,
    marginLeft: 5,
  },
  popularCartRight: {
    marginLeft: 5,
  },
  popularCartImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
export default Home;
