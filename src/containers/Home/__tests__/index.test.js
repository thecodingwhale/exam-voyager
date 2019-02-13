import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { mount } from 'enzyme';
import { Home } from '../index';
import { FETCHING } from '../../../shared/constants';

describe('<Home />', () => {
	let wrapper;
	beforeEach(() => {
		const options = new ReactRouterEnzymeContext();
	  wrapper = mount(
	  	<Home
	  		location={{
	  			search: '',
	  		}}
				totalPosts={0}
				requestType={null}
				posts={[]}
				error={false}
				getPosts={() => {}}
	  	/>,
	  	options.get(),
	  );
	});

	it('renders a button with text "Create Post"', () => {
	  expect(wrapper.find('Button').length).toEqual(1);
	  expect(wrapper.find('Button').text()).toEqual('Create Post');
	});

	it('should call changePage with arg "/post/create"', () => {
		const changePageSpy = jest.fn();
	  wrapper.setProps({
	  	changePage: changePageSpy,
	  });
	  wrapper.find('Button').simulate('click');
	  expect(changePageSpy).toHaveBeenCalled();
	  expect(changePageSpy).toHaveBeenCalledTimes(1);
	  expect(changePageSpy).toHaveBeenLastCalledWith('/post/create');
	});

	it('renders <Alert /> set prop color danger when error exist', () => {
		const errorMessage = "Simple error message.";
		wrapper.setProps({
			error: errorMessage,
		});
		expect(wrapper.find('Alert').first().prop('color')).toEqual('danger');
		expect(wrapper.find('Alert').first().text()).toEqual(errorMessage);
	});

	it('renders <Alert /> set prop color info when totalPosts equals to 0', () => {
		expect(wrapper.find('Alert').last().prop('color')).toEqual('info');
		expect(wrapper.find('Alert').last().text()).toEqual('No posts found.');
	});

	it('renders fetching text if requestType set to FETCHING' , () => {
		wrapper.setProps({
			requestType: FETCHING,
		});
		expect(wrapper.find('.fetching').text()).toEqual('Fetching...');
	});

	it('renders total numbers of posts', () => {
		const totalPosts = 12;
		wrapper.setProps({
			totalPosts,
		});
		expect(wrapper.find('.total-posts').text()).toEqual(`Number of posts: ${totalPosts}`);
	});

	it('render expected list of post', () => {
		const posts = [{
			id: 1,
			title: 'first title',
			content: 'first content',
		}, {
			id: 2,
			title: 'second title',
			content: 'second content',
		}, {
			id: 3,
			title: 'third title',
			content: 'third content',
		}];
		wrapper.setProps({
			posts,
		});

		expect(wrapper.find('.posts').length).toEqual(1);
		expect(wrapper.find('.posts__article').length).toEqual(posts.length);

		posts.forEach(({ id, title, content }, index) => {
			const post = wrapper.find('.posts__article').at(index);
			const link = post.find(`[href="/post/${id}"]`);

			expect(link.length).toEqual(1);
			expect(link.text()).toEqual(title);
			expect(post.find('p').text()).toEqual(content);
		});
	});
});