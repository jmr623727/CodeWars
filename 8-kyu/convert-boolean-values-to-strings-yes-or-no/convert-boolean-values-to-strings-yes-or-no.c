#include <stdbool.h>
​
const char *bool_to_word (bool value)
{
  return value == true ? "Yes" : "No";
}