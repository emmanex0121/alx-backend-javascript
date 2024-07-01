export default function getStudentsByLocation(stdList, city) {
  return stdList.filter((studentByCity) => studentByCity.location === city);
}
