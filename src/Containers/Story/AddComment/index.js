//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert,Keyboard } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import FeedHeader from './Components/FeedHeader'
import { Colors, WP } from '../../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
import CommentInputBox from './Components/InputField'
import CommentsListings from './Components/CommentsLists'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNurseComments, addComments } from '../../../Store/actions'
import { isOnline, ShowActivityIndicator, showToast } from '../../../Services';
import moment from 'moment'


// create a component
const AddComments = ({ route, navigation }) => {
    console.log("showing props here", route)
    const { params } = route
    const previousClasses = useSelector(state => state.story.nurseComments)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [addedComments, setAddedComments] = useState(null)
    const [taggedId, setTaggedId] = useState(null)
   console.log('coments====',JSON.stringify(comments))
   console.log('user.id===',JSON.stringify(user.id) )
   //const nurserProfile = useSelector(state => state.story.nurseProfile)
   //console.log('Profile Name ===',nurserProfile.nurserProfile.nurse.first_name )
    useEffect(() => {
        setAddedComments(null)
        isOnline((connected) => {
            setLoading(true)
            setComments([])
            dispatch(fetchNurseComments(user.id, params.id, (comments) => { setLoading(false), setComments(comments) }, () => { setLoading(false) }))
        },
            (offline) => {
                showToast(t('commonApp.internetError'))

            })
    }, [params])

    const addComment = (comment) => {
        try {
            // if (addedComments) {
            if (comment) {
                console.log('AddedComments==',addedComments)
                console.log('Comments==',comment)
                let parameter = {   
                    user_id: user.id,
                    content_id: params.id,
                    comment: comment,
                    mentioned_user_id: taggedId,
                    entry_time: moment().format('YYYY-MM-DD hh:mm:ss'),
                    session_id: moment().format('YYYY-MM-DD hh:mm:ss'),
                    // entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
                    // session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
                    token: "j56sugRk029Po5DB",
                    appuser_id: user.id,
                    access_token: "",
                }
                console.log('CommentParams====', JSON.stringify(parameter))
                setLoading(true)
                isOnline((connected) => {
                    dispatch(addComments(parameter, (success) => {
                        console.log('CommentAddResponse======', JSON.stringify(parameter))
                        
                            
                        dispatch(fetchNurseComments(user.id, params.id, (comments) => { setLoading(false), setComments(comments) }, () => { setLoading(false) }))
                        setAddedComments(null)
                    
                        
                    }, () => { setLoading(false), showToast('Please tap post again!') }))

                    console.log("ParameterOFComment==="+ JSON.stringify(parameter));

                }, (offline) => {
                    showToast(t('commonApp.internetError'))

                })

            }
            else {
                console.log("shpwing error here")

            }
        }
        catch (error) {
            console.log("shpwing error here", error)
            alert("Something went wrong!")

        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={'Add Comment'}
                navigation={navigation}
            />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                <FeedHeader
                    feed={params}
                />
                <CommentInputBox
                    placeholder={'Add Comment Here'}
                    onPress={(comment) => {
                        console.log('added comment in post button ====> ',comment);
                        Keyboard.dismiss()
                        addComment(comment)
                    }}
                    value={addedComments}
                    onChangeText={(text) => {
                        console.log('comment text ====> ',text);
                        setAddedComments(text)
                    }}
                    taggedId={setTaggedId}
                />
                {loading ?
                    <View style={styles.loader}>
                        {ShowActivityIndicator()}
                    </View>
                    :
                    comments.length > 0 ?
                        <CommentsListings
                            comments={comments}
                        /> :
                        <Text style={styles.noComment}>No Comments Found</Text>
                }
            </KeyboardAwareScrollView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    noComment: {
        color: Colors.appColor,
        alignSelf: 'center',
        marginTop: WP('50'),
        fontSize: WP('5'),
        fontFamily: "Assistant-Regular"

    },
    noCommentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        alignSelf: 'center',
        marginTop: WP('50'),
    }
});

//make this component available to the app
export default AddComments;
