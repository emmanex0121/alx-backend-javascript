import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(stdList = getListStudents(), city) {
  return stdList.filter((studentByCity) => studentByCity.location === city);
}
