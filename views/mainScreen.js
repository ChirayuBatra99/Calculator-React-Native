import {  Pressable, ScrollView, Text, View } from 'react-native'
import React,{useState} from 'react'
import styles from './mainScreenCSS'

export default function MainScreen() {

    const [value, setValue] = useState('0');
    const [bracketopen, setBracketOpen]= useState(false);

    const handlePress=(val)=>{
        if(val == 'AC')
            setValue('0');
        else if(val == '<')
            setValue(value.slice(0,-1));
        else if(val == '()')
        {
            if(value =='0')
            {
                setValue('(');
                setBracketOpen(true);
            }
            else if(value.slice(-1)== '+' || value.slice(-1)== '-' || value.slice(-1)=='*' ||value.slice(-1)=='/')
            {
                setValue(value+ '(')
                setBracketOpen(true);
            }
            else
            {
                if(bracketopen == true)
                {
                    setValue(value + ')')
                    setBracketOpen(false);
                }
                else{
                    setValue(value + '(');
                    setBracketOpen(true);
                }
            }
        }
        else if(val == '=')
        {
            try
            {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) 
                {
                    if(value.slice(-1)== '+' || value.slice(-1)== '-' || value.slice(-1)=='*' ||value.slice(-1)=='/')
                    {
                        setValue(`${eval(value.replace('()', '(0)').slice(0,-1))}`)
                    }
                    else
                    {
                        setValue(`${eval(value.replace('()', '0') + '*1')}`)
                    }
                }
            }
            catch(e)
            {
                setValue('format error bro');
            }
        }
        else
        {
            if(value == '0')
            {
                if(val=='+' || val=='-' || val=='*' || val=='/' || val=='.' || val=='%')
                    setValue(value + val);
                else
                    setValue(val)
            }
            else if(isNaN(val))
            {
                if(value.slice(-1)=='+' || value.slice(-1)=='-' || value.slice(-1)=='*' || value.slice(-1)=='/' || value.slice(-1)=='.' || value.slice(-1)=='%')
                    setValue(value.slice(0,-1) + val);
                else
                    setValue(value+val);
            }
            else if(!isNaN(val))
                setValue(value + val);
        }
    }

  return (
    <View style={styles.mainContainer}>
        <ScrollView style={styles.boxStyle}>
            <Text style={styles.screenTextStyle}>{value}</Text>
        </ScrollView>
        <View style={styles.individualRow}>
            <Pressable onPress={()=> handlePress('AC')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>AC</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('()')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>()</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('%')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>%</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('/')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>/</Text>
                </View>
            </Pressable>
        </View>

        <View style={styles.individualRow}>
            <Pressable onPress={()=> handlePress('7')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>7</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('8')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>8</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('9')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>9</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('*')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>*</Text>
                </View>
            </Pressable>
        </View>

        <View style={styles.individualRow}>
            <Pressable onPress={()=> handlePress('4')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>4</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('5')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>5</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('6')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>6</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('-')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>-</Text>
                </View>
            </Pressable>
        </View>

        <View style={styles.individualRow}>
            <Pressable onPress={()=> handlePress('1')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>1</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('2')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>2</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('3')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>3</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('+')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>+</Text>
                </View>
            </Pressable>
        </View>

        <View style={styles.individualRow}>
            <Pressable onPress={()=> handlePress('0')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>0</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('.')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>.</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('<')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>back</Text>
                </View>
            </Pressable>

            <Pressable onPress={()=> handlePress('=')}>
                <View style={styles.individualCircle}>
                    <Text style={styles.textStyle}>=</Text>
                </View>
            </Pressable>
        </View>


    </View>
  )
}

