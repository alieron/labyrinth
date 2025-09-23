---
tags: []
complete: false
prev: /labyrinth/notes/cs/cs2040s/table_ADT

---
### Summary

### Concept

### Application
Leetcode: [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window)
- [sliding window](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^01a391) with hash map
- improvement over [naive approach](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^6cde58)

```java
if (nums.length < 2) // ignore trivial case
	return false;

Map<Integer, Integer> mp = new HashMap<>();

for (int i = 0; i < nums.length; i++) {
	int num = nums[i];
	if (mp.containsKey(num)) 
		if (i - mp.get(num) <= k) 
			return true;

	mp.put(num, i); // add the most recent index of the number to the map
}

return false;
```

Leetcode: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1778966652/?envType=problem-list-v2&envId=sliding-window)
- [sliding window](/labyrinth/notes/cs/cs2040s/two_pointer_approach#^01a391) with hash map

```java
Map<Character, Integer> mp = new HashMap<>();

int left = 0, max = 0;

for (int i = 0; i < s.length(); i++) {
	char c = s.charAt(i);
	if (mp.containsKey(c))
		left = Math.max(left, mp.get(c) + 1); // set left if its larger then the old value
	max = Math.max(max, i - left + 1); // compare against the length of the current string

	mp.put(c, i); // add the most rescent index of this character to the map
}

return max;
```

Leetcode: [longest-consecutive-sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked)
```java
HashSet<Integer> hs = new HashSet<>(); // dont care about duplicates

for (int n : nums)
	hs.add(n);

int longest = 0;
for (int n : hs) {
	if (hs.contains(n - 1)) continue; // dont bother searching, since the smaller value would have been searched already

	int cur = 1;
	while (hs.contains(++n))
		cur++;

	longest = Math.max(longest, cur);
}

return longest;
```

Leetcode: [group-anagrams](https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked)
- map the anagrams(values) according to the sorted version(hash)

```java
Map<String, List<String>> mp = new HashMap<>(); // map from the sorted anagram to the other anagrams

for (String w : strs) {
	char[] chars = w.toCharArray();
	Arrays.sort(chars);
	String k = new String(chars); // sorted anagram as the key

	List<String> ls;
	if (mp.containsKey(k)) {
		ls = mp.get(k); // retrieve the existing list
	} else {
		ls = new ArrayList<>(); // create new list if it doesnt yet exist
	}
	ls.add(w);
	mp.put(k, ls);
}

return new ArrayList<>(mp.values()); // HashSet -> Collection -> List
```

Leetcode: [unique-number-of-occurrences](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75)
- use a set to remove duplicates

```java
Map<Integer, Integer> map = new HashMap<>(); // map each number to its occurance

for (int n : arr) {
	if (map.containsKey(n))
		map.put(n, map.get(n) + 1);
	else
		map.put(n, 1);
}

Set<Integer> count = new HashSet<>(map.values());
return map.size() == count.size(); // if they are the same size there are no duplicates
```