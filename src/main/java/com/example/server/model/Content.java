package com.example.server.model;

public class Content {
	private Long id;
	private String value;

	public Content() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Content(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Content [id=" + id + ", value=" + value + "]";
	}

}
