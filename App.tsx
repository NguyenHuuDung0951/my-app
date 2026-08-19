import { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function App() {
  const [search, setSearch] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  return (
    <View style={styles.screen}>
      <View>
        <View>
          <View style={styles.topBar}>
            <Text style={styles.logo}>SmartCampus</Text>
          </View>

          <View style={styles.infoWrapRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>SV</Text>
            </View>

            <View style={styles.studentRow}>
              <Text style={styles.studentName}>Nguyễn Hữu Dũng</Text>
              <Text style={styles.studentMeta}>Mã SV: 23728131</Text>
            </View>
          </View>

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Tìm kiếm thông tin..."
            placeholderTextColor="#9AA6BA"
            style={styles.searchInput}
            accessibilityRole="search"
            accessibilityLabel="Tìm kiếm thông tin sinh viên"
          />

          <View style={styles.studentCard}>
            <Text style={styles.cardTitle}>Thông tin sinh viên</Text>
            <Text style={styles.cardText}>Email: 23728131.dung@student.iuh.edu.vn</Text>
            <Text style={styles.cardText}>Lớp: KTPM19B</Text>
            <Text style={styles.cardText}>SĐT: 0935765186</Text>
          </View>
          <View>
           
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Lưu hồ sơ sinh viên"
            accessibilityState={{ disabled: false }}
            onPress={() => setIsSaved((prev) => !prev)}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.primaryButtonPressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>{isSaved ? 'ĐÃ LƯU' : 'LƯU HỒ SƠ'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ebeef5',

  },


  topBar: {
    backgroundColor: '#1d85e7',
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 2,
    borderColor: '#1a3c6d',
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },
  infoWrapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 18,
    gap: 14,
  },
  avatarCircle: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: '#dfe8ff',
    borderWidth: 2,
    borderColor: '#1a3c6d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1a3c6d',
  },
  studentRow: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 0,
  },
  studentName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a2438',
    marginBottom: 4,
  },
  studentMeta: {
    fontSize: 15,
    color: '#465979',
  },
  searchInput: {
    marginHorizontal: 18,
    marginTop: 8,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#e9edf5',
    borderWidth: 1,
    borderColor: '#d5dcec',
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#1d2740',
  },
  studentCard: {
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#edf2fb',
    borderWidth: 1,
    borderColor: '#cbd8f6',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1d2740',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#44577e',
    
  },
  primaryButton: {
    marginHorizontal: 18,
    marginTop: 18,
    backgroundColor: '#1d85e7',
    borderRadius: 12,
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1a3c6d',
  },
  primaryButtonPressed: {
    opacity: 0.9,
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.3,
  },
 
});
