// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const GET_REFRESH_TOKEN = gql`
query GET_REFRESH_TOKEN {
    token {
        token
    }
}
`;

export const GET_CALENDER_EVENTS = gql`
query GetCalenderEvents($network: String!) {
    calender_events(where: {network: {_ilike: $network}}) {
        content
        end_time
        id
        module
        network
        start_time
        title
        url
    }
}
`;

export const EDIT_CALENDER_EVENT= gql`
    mutation EditCalenderEvent ($id: Int!, $title: String!, $start_time: timestamptz!, $content: String, $end_time: timestamptz!, $url: String, $module: String, $network: String!) {
        update_calender_events(where: {id: {_eq: $id}}, _set: {title: $title, content: $content, start_time: $start_time, end_time: $end_time, url: $url, module: $module, network: $network}) {
            affected_rows
        }
    }
`;

export const DELETE_CALENDER_EVENT = gql`
    mutation DeleteCalenderEvent ($id: Int!) {
        delete_calender_events(where: {id: {_eq: $id}}) {
            affected_rows
        }
    }
`;

export const ADD_CALENDER_EVENT=gql`
    mutation AddCalenderEvent ($title: String!, $start_time: timestamptz!, $content: String, $end_time: timestamptz!, $url: String, $module: String, $network: String!) {
        insert_calender_events(objects: {title: $title, start_time: $start_time, end_time: $end_time, content: $content, url: $url, module: $module, network: $network}) {
            affected_rows
        }
    }
`;

export const ADD_BIO_IMAGE=gql`
    mutation addProfile ($image: String, $bio: String, $user_id: Int!, $title: String, $badges: String) {
        addProfile(image: $image, bio: $bio, user_id: $user_id, title: $title, badges: $badges) {
            message
        }
    }
`;

export const GET_USER_DETAILS = gql`
    query GetUserDetails($user_id: Int!) {
        userDetails(user_id: $user_id) {
            bio
            image
            user_id
            title
            badges
        }
    }
`;
