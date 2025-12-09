let st = new Set();
st.add("C");
st.add("C++");
st.add("C");
st.add("DSA");
st.add("JAVA");
st.add("DSA")
st.delete("C");
for(var item of st)
{
    console.log(item);
}
for(var item of st.entries())
    {
        console.log(item)
    }